import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import WalletService from "../../../../api/WalletService";
import { closeTransPopup } from "../../../../redux/reducers/dashboard-reducer";
import { getAllWalletsTC } from "../../../../redux/reducers/wallets-reducer";
import { CreateWalletBtn } from "../../../pages/Dashboard/pages/Wallets/CreateNewWallet/CreateNewWallet";
import EmbeddedLoader from "../../EmbeddedLoader/EmbeddedLoader";
import { calc } from "./decorator";
import FeeNotes from "./FeeNotes";
import { transPopupButtons, coinInit } from "./init";
import { BuyTransaction, SellTransaction, SwapTransaction } from "./operations";
import s from "./Trans.module.css";

const TransactionPopup = ({ onCallback }) => {
  const dispatch = useDispatch();
  const [transType, setTransType] = useState(0);
  const [isFee, setFee] = React.useState(false);
  const onSetFee = () => setFee(!isFee);
  const { item, isShow, walletId, wallets } = useSelector(({ dashboard, wallets }) => ({
    item: dashboard.transCoin,
    isShow: dashboard.isTransPopup,
    walletId: dashboard.walletId,
    wallets: wallets.content,
  }));

  const [sFrom, setSFrom] = useState(coinInit);
  const [sTo, setSTo] = useState(coinInit);

  const getTitle = (walletId) => {
    const walletObjId = wallets?.find((wall) => wall.id === walletId);
    return walletObjId?.name;
  };

  const setClose = () => {
    dispatch(closeTransPopup);
    setTransType(0);
  };

  const onSubmit = async (e) => {
    const wallet = walletId || e.walletId;
    let data = {
      amount: e.amount,
      datetime: e.datetime,
      price: e.price,
      coinId: item.id,
      usdAmount: e.amount * e.price,
      comment: e.notes,
    };

    switch (transType) {
      case 0:
        await WalletService.buyCoinInWalletId(wallet, data);
        break;
      case 1:
        await WalletService.withdrawCoinsWalletId(wallet, data);
        break;
      case 2:
        await WalletService.swapCoinsWalletId(wallet, {
          comment: e.notes,
          fromAmount: e.from_amount,
          fromCoinId: sFrom.id,
          toAmount: e.to_amount,
          toCoinId: sTo.id,
          usdAmount: e.usdAmount,
        });
        break;
    }

    dispatch(getAllWalletsTC());
    onCallback && onCallback();
    setClose();
  };

  useEffect(() => {
    if (!wallets && isShow) {
      dispatch(getAllWalletsTC());
    }
    item && setSFrom({symbol: item.symbol, id: item.id});
    return () => setFee(false);
  }, [wallets, isShow]);

  if (isShow)
    return (
      <div className={s.popup_wrapper}>
        <div className={s.popup_content}>
          <button onClick={setClose} className={s.btn_close}>
            <IoCloseOutline />
          </button>
          {walletId || wallets ? (
            <div className={s.popup_info}>
              <h2>Add Transaction {walletId && "to " + getTitle(walletId)}</h2>
              <div className={s.trans_buttons}>
                {transPopupButtons.map((e, i) => (
                  <button key={i + "_transbtn"} onClick={() => setTransType(e.id)} className={e.id === transType ? s.active : ""}>
                    {e.title}
                  </button>
                ))}
              </div>
              <Form
                onSubmit={onSubmit}
                decorators={[calc]}
                initialValues={{
                  price: item.currentPrice,
                }}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    {!walletId && (
                      <div className={s.select_wallet}>
                        <label>
                          Select Wallet:<span className={s.red}>*</span>
                        </label>

                        {wallets.length === 0 ? (
                          <CreateWalletBtn name={"Create New Wallet"} classn={'btn_newWallet'} />
                        ) : (
                          <div className="select-wrapper">
                            <Field name="walletId" component="select" defaultValue={wallets[0]?.id} required>
                              {wallets.map((e, i) => (
                                <option key={i + "_selectwalletpopup"} value={e.id}>
                                  {e.name}
                                </option>
                              ))}
                            </Field>
                          </div>
                        )}
                      </div>
                    )}

                    {transType === 0 && <BuyTransaction symbol={item.symbol} amount={item.amount} />}
                    {transType === 1 && <SellTransaction symbol={item.symbol} amount={item.amount} />}
                    {transType === 2 && <SwapTransaction symbol={item.symbol} amount={item.amount} sFrom={sFrom} sTo={sTo} setSTo={setSTo} setSFrom={setSFrom} />}

                    <FeeNotes isFee={isFee} setFee={onSetFee} setAnim={transType} />
                    <div className={s.action_popup}>
                      <button onClick={setClose} type="button">
                        Cancel
                      </button>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                )}
              />
            </div>
          ) : (
            <EmbeddedLoader />
          )}
        </div>
        <div className={s.popup_bg} onClick={setClose} />
      </div>
    );
  return <></>;
};

export default TransactionPopup;

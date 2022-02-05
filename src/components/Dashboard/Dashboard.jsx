import React, { useRef, useState } from 'react';
import useOutsideClickHide from '../../helpers/hideOutsideClick';
import AsideBlock from './Components/Aside/Aside';
import s from './Dashboard.module.css';



const Dashboard = (props) => {

    return (
        <div className={s.dashboard_overlay}>
            <AsideBlock />
            <div className={s.dashboard_content}>
                <header className={s.header_dash}>
                    <span>{props.name}</span>

                    <SearchResults />
                    <LastNotifications />

                    <ProfSettings />
                </header>
                <main className={s.main_dash}><h1>Header text</h1>
                    <div className={s.content_block}>123123</div>
                    <LastSectedItems />


                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate earum soluta minima ab repellat perferendis dicta officiis unde sequi tempore dolorem, optio eaque ullam, ut, modi nesciunt quos minus. Eaque nostrum vel sequi eveniet quas quos nobis, laboriosam cum. Sit, voluptates quae? Atque repellendus minima rerum dolor nisi error quia est! Veniam doloribus, cum adipisci, numquam rerum molestias nesciunt neque sapiente itaque dicta illo, debitis consequuntur a voluptate voluptas deleniti obcaecati recusandae at ipsum incidunt. Exercitationem doloremque dignissimos ab libero suscipit. Modi officiis quo tempore. Quis accusantium quidem consequatur, eius reprehenderit qui esse excepturi libero hic veniam, temporibus velit quas assumenda ad praesentium corporis impedit aspernatur unde. Dignissimos magni, placeat tempore ad fugit rem ipsum natus doloribus hic, facere sapiente dolorem culpa totam fugiat unde quas aperiam iusto quam, aut accusantium quibusdam. Quos quo corrupti saepe? A nobis fuga totam voluptatum? Autem, distinctio sit corrupti fugit architecto doloribus ut cumque libero unde magni deserunt animi? Ea quisquam rem quo, optio placeat, nulla rerum quaerat ab fugit cumque molestiae, quas iste id repudiandae maiores aliquid possimus qui! Commodi, doloremque. Enim nemo ratione voluptate sit, animi, minus facere harum ad placeat dolore amet necessitatibus! Amet voluptas impedit assumenda sint dolorum nostrum exercitationem sed, ratione iure sequi? Ipsa ab sed deserunt eius molestias minus itaque autem, cum, quos delectus, sequi eos labore maxime? Quod beatae possimus fugit. Ut incidunt possimus fugit vitae accusamus voluptatem blanditiis facilis ex eos iste, maxime dolorum reprehenderit magni atque alias neque odit. Suscipit quisquam sunt animi quam nesciunt. Aperiam iure corporis perspiciatis ipsum rerum earum eum exercitationem, facilis nobis, maiores itaque! Libero nam neque quasi, magni voluptatem reprehenderit aspernatur nobis qui laboriosam quos consectetur inventore labore facilis. Alias et hic eligendi laudantium debitis libero, officia error atque magni explicabo ipsam, tempore corporis quaerat aut dolorem minus asperiores esse voluptatum, rerum aliquam! Laudantium animi eum debitis similique laborum, voluptate molestiae, voluptatibus sed assumenda natus facere repudiandae maiores eaque quam deleniti fuga atque perferendis temporibus quaerat repellendus. Dolorum suscipit aperiam, rerum sit eaque adipisci molestiae soluta dolore praesentium autem, error vel est asperiores provident inventore, cum eligendi cupiditate quae ratione assumenda vitae. Laboriosam, repellendus doloremque! Voluptatem sequi fugiat vero possimus aut, debitis, laudantium soluta nihil labore illo vel, velit nemo eaque minus qui! Quibusdam officiis recusandae repellendus ea minus, cupiditate repudiandae veritatis exercitationem? Accusantium tempora, nobis, consequuntur iste illum voluptatum nemo vitae sit quibusdam maxime, eveniet dolore nostrum accusamus impedit omnis error deleniti fugit cumque voluptates dolor doloribus. Deserunt cum tempore dolorem minus, at debitis, molestias cumque voluptatem doloremque labore cupiditate deleniti dignissimos libero nisi hic. Itaque consequuntur autem nulla non soluta obcaecati doloribus exercitationem maiores ad possimus sint facere dolorum, odit at totam! Corrupti, architecto quae? Incidunt possimus, recusandae distinctio iusto mollitia similique esse placeat numquam facere quaerat culpa, alias ratione in ipsa doloremque voluptas magni perferendis. Impedit est esse necessitatibus in voluptatibus repellat exercitationem rem recusandae beatae iste aperiam, illum illo nisi! Necessitatibus nam rem eius, delectus doloremque velit quasi quisquam asperiores harum non eligendi ex. Atque est non magnam ipsa nostrum laborum voluptates voluptatum culpa iure debitis aliquid, corrupti qui, eius iste quidem aspernatur recusandae? A amet tempore ex, dolorem maiores voluptates asperiores, doloribus similique quisquam praesentium illo. Quasi ad maiores quibusdam totam quia optio magnam ut nostrum dolores ipsam similique, repellendus, reiciendis maxime illo. Explicabo, nostrum eos voluptates porro quidem tenetur nihil sint enim aut nam voluptatum ipsum est. Cumque deleniti blanditiis harum ad delectus, fuga quo nesciunt minima dolor perspiciatis ut possimus deserunt repudiandae dignissimos esse magni dolores dicta. Corrupti aliquid ea esse expedita officiis voluptatum minima eos laborum quos. Dolor vero, ab amet exercitationem rerum blanditiis molestiae odit corporis quas porro eius, tempore eos necessitatibus molestias voluptate. Ducimus facere dignissimos debitis sapiente eligendi adipisci reprehenderit, repudiandae cumque impedit quisquam ut deleniti laudantium! Qui at sapiente tempora placeat optio sit officiis incidunt, perferendis ex dolores suscipit facere animi eligendi saepe fugit maiores provident odio eos quasi nemo aliquam. Iure quasi earum pariatur, aliquid nam perferendis neque dolores, corporis quisquam eaque exercitationem? Necessitatibus at tenetur fuga soluta ab exercitationem error et aperiam, ipsum eligendi non veritatis ad sed suscipit illo magnam provident labore sequi ducimus accusamus! Impedit cupiditate quisquam voluptatum assumenda nostrum delectus in sed placeat architecto earum, obcaecati reiciendis temporibus omnis at quidem doloribus enim est ratione dignissimos id voluptatibus molestiae tempore necessitatibus provident. Facere vero aliquid expedita corrupti quas voluptatem consequatur, nihil, eligendi, quisquam quia quam voluptas dolores? Vero nulla atque maiores ad, odit suscipit minus totam? Aut magnam ut consequuntur enim rem quia, accusamus similique harum doloribus dolores. Totam quas a, itaque error voluptatum reiciendis! Animi obcaecati quas expedita corporis eaque repellat. Ut dicta laudantium consectetur saepe amet, asperiores optio reiciendis quasi repellat nobis beatae porro voluptatibus ipsam possimus obcaecati. Voluptatibus a architecto explicabo eum quidem voluptatum nostrum. Fugit eligendi ratione nostrum! Esse aut cupiditate iure doloribus officia molestias dolores voluptatibus non repellat eaque necessitatibus ipsam velit odio ratione beatae quod, soluta tempore suscipit? Nulla tenetur nesciunt, omnis incidunt voluptatibus tempore ullam consequatur ipsa nobis dolorem at est labore blanditiis odit, eaque expedita soluta fugiat odio consectetur aliquam commodi saepe. Asperiores tempore fugit nesciunt inventore optio veritatis, facere, at nemo odio repellat officiis commodi totam numquam eum voluptatem perferendis, enim molestiae minus alias labore amet aperiam ex sed harum? Exercitationem, iste. Dolorum nisi sapiente amet quae, laborum deleniti, temporibus omnis sit nam illo eaque aliquid placeat quidem esse necessitatibus error natus magni, animi quam soluta. Modi possimus nostrum aliquid nemo vel quod, non magni ipsum voluptate harum sit, necessitatibus odio sapiente deserunt ipsam expedita! Voluptatum fugit facere quis dolorem alias pariatur harum explicabo. Facere velit quo officia hic. Nobis eum saepe voluptas fugit consectetur porro asperiores, molestias nostrum esse, obcaecati ab. Totam distinctio amet repudiandae soluta maiores, cumque mollitia debitis minima molestiae aliquid tenetur commodi ducimus dignissimos delectus ex similique quae optio eveniet possimus. Culpa esse reprehenderit totam modi quisquam atque dolorem, accusamus numquam. Dolores laborum esse, autem dolorum unde asperiores ipsa odit quibusdam obcaecati impedit. At eius quo aliquam repellendus minus sed dolorem delectus odio quia facere, voluptatem voluptatibus eveniet eum obcaecati fugit hic maxime dolores sit a illo! Assumenda neque temporibus velit, deserunt dolore facere quas aliquid consequuntur excepturi corporis animi. Asperiores, repellendus est minima suscipit officiis modi accusamus error illo voluptates ex. Reprehenderit assumenda ullam unde quos ut cumque alias iure iste expedita, ea debitis qui maxime labore delectus atque totam dignissimos sint quis rem enim! Expedita quos quae veniam dolorem placeat! Dolore sequi eius asperiores? Dolorem ratione asperiores ex accusamus molestias, quo possimus sapiente? Eum, sit ipsa. Perferendis at non ducimus nemo, voluptates cumque ut iure provident illo, officiis explicabo voluptatem ipsum. Quasi, dignissimos id sed ipsa temporibus eveniet aspernatur praesentium voluptas natus soluta consequuntur accusantium facere deleniti? Quibusdam quod dicta recusandae ipsa esse libero enim nam totam voluptas harum odit tempore vel qui doloribus temporibus quam voluptatibus dolore soluta blanditiis, excepturi consectetur aspernatur exercitationem architecto. Doloremque quasi aperiam necessitatibus ad labore quas ipsa enim, atque corrupti, quod vero praesentium modi soluta, dolorum provident ipsum quae veniam autem suscipit iste eum. Qui aut architecto aliquam, repellat cumque cum tenetur modi rem dicta, distinctio necessitatibus id sint sit a fugit accusamus molestiae dignissimos odit, voluptatibus tempora perferendis consequatur adipisci aliquid! A quidem praesentium omnis amet esse voluptatem facilis dicta veniam nemo atque pariatur dolore animi quisquam, consectetur saepe alias! Id, officia. Libero tenetur sapiente quaerat beatae delectus porro dolores rerum nihil est eum autem totam sint veritatis vel dolore cum inventore, magnam illum iste cupiditate quod perferendis unde natus! Minima quisquam aspernatur asperiores placeat, pariatur quia aliquam quaerat tenetur eos recusandae praesentium molestias enim, voluptatibus earum explicabo voluptatum. Voluptas expedita molestias corrupti, dignissimos in aliquid quasi mollitia dicta ipsam culpa commodi quos accusantium voluptatem iure necessitatibus eveniet repellat nostrum, nam esse, minima consequuntur pariatur laudantium. Nulla minus ab nesciunt impedit vitae sed labore mollitia ex facere sapiente molestias inventore, sequi dolorum ipsa aliquid libero id reiciendis. Laboriosam, unde? Cum explicabo, placeat nesciunt architecto qui reprehenderit esse quasi recusandae debitis a quam ex rerum? Officia, molestiae inventore ad perspiciatis possimus neque dolorum culpa corporis necessitatibus dolores illo quaerat excepturi commodi impedit libero iure similique repellendus itaque officiis atque consequatur, nesciunt accusantium a. Et maxime molestiae dignissimos optio odio, voluptatem, possimus fugit fugiat provident itaque porro neque veritatis fuga. Recusandae accusamus dicta at consequatur cupiditate, sed doloribus blanditiis expedita in aliquid. Voluptatum, harum rerum nulla blanditiis amet voluptate enim veritatis ipsum, voluptatibus earum sunt, distinctio fugit perferendis veniam nostrum quam. Et rem modi debitis obcaecati cupiditate doloremque voluptas! Odit explicabo sed omnis sint dignissimos, harum officiis, debitis modi esse, perferendis qui eos earum quidem! Veniam accusamus aliquid maiores obcaecati repellat. Aliquam corrupti recusandae distinctio iste maxime culpa beatae, voluptatem, quibusdam, dolorem expedita dolores asperiores id quis soluta laudantium. Fugit sequi a, natus, molestiae laboriosam ducimus minima iste velit excepturi facere, qui nemo eos nulla cupiditate? Maxime veritatis sunt neque magni delectus impedit obcaecati officiis aspernatur, aperiam error placeat iure explicabo praesentium minima iste quaerat expedita consequatur sapiente similique excepturi odit? Mollitia, distinctio eius. Dolorum consectetur nobis expedita sed consequatur, nisi non cupiditate ipsa corrupti? Suscipit ex magnam ipsam ut dolorem natus et, optio placeat eius culpa at repudiandae rerum a molestiae, esse quas beatae vero error accusantium explicabo asperiores corporis mollitia maiores. A illum quos autem, perspiciatis ab rerum repellat iure architecto eligendi, voluptatibus nemo ratione officia minima qui accusantium at vero sint vel ut tempora quam ipsam! Aliquam amet, sequi nam quisquam possimus illum consequuntur, porro accusamus repudiandae molestias quasi modi autem ab voluptates eius nihil! Totam deserunt ipsam quam voluptates, in doloribus modi aspernatur, dolore beatae culpa laudantium architecto numquam hic magnam alias nostrum eius consequuntur libero odit, quis asperiores ullam obcaecati. Velit sapiente, error provident quo ipsa obcaecati aliquid vero voluptatum numquam deserunt quisquam vel enim iusto perspiciatis voluptates eaque, unde sequi recusandae nisi fuga natus? Inventore quasi adipisci nemo repellendus dolores sapiente ab vero, corporis a suscipit cum illum illo non fuga saepe quam repellat consequatur quidem ipsa tempora. Ut odio itaque obcaecati delectus vero nihil magnam dolore officia, ipsam in consectetur eligendi nobis placeat dolor. Veritatis ratione harum soluta id explicabo voluptatum, doloribus pariatur voluptates veniam dignissimos earum, iusto illum possimus praesentium magnam ex vero ad. Dolorem nihil impedit asperiores, iusto culpa voluptatibus harum animi! Temporibus, hic? Aspernatur vero ratione, nesciunt culpa sunt id tempore quae quos facilis! Voluptatibus id corporis deleniti esse quibusdam deserunt quo amet ducimus beatae dolor perferendis consectetur error libero, earum, hic alias quia ad, cum eum ab obcaecati vero! Perferendis iusto, eos reiciendis impedit, quis a deleniti autem iste alias, ea consectetur distinctio labore libero eligendi vitae magnam dolores? Temporibus labore sint beatae possimus? Ipsum nulla eius incidunt distinctio saepe rerum facere consequuntur voluptatum, id eveniet deserunt, corrupti maiores quidem sunt. Optio deleniti eos consequatur praesentium similique. Dolore facere accusamus voluptatum atque veritatis. Delectus perspiciatis non consequatur ut. Eligendi incidunt libero optio atque! Unde ab laborum atque deserunt provident optio? Voluptates suscipit, nobis at explicabo voluptate officia adipisci commodi, magni, eos dolor atque odit consectetur molestiae reiciendis alias perferendis fugit eum necessitatibus voluptatem eius magnam! Perspiciatis ratione dolorem quos odio alias aperiam eos vel aspernatur sequi sit maxime numquam dignissimos neque tenetur incidunt amet, laborum, pariatur quidem ea recusandae ut! Tempore delectus, perferendis earum deleniti eveniet nisi reiciendis asperiores illum. Consectetur, neque dolorem ea quibusdam iusto soluta repellendus rerum laudantium expedita ratione iure dolorum deleniti dicta rem esse doloremque. Eius magnam totam velit necessitatibus cumque molestiae sint vitae eligendi temporibus voluptatum modi quaerat tempora provident, quisquam aliquid qui quos quae cum tenetur magni eos veniam cupiditate quo commodi. Alias harum repudiandae vitae nulla! Porro consectetur eius magnam, doloribus earum quam a nobis omnis ipsam dicta asperiores, iusto architecto dolore vitae, inventore facilis harum? Optio quae perspiciatis sit, fuga et deleniti possimus distinctio facere cum voluptas placeat natus, dignissimos maiores corrupti a consectetur consequatur voluptatem, dolores sapiente culpa. Totam, nihil reprehenderit dolore sint nam maiores omnis, voluptatem impedit voluptatibus aut atque, quia beatae repudiandae eius numquam laudantium. Magnam velit, accusantium tenetur quos delectus atque, nesciunt quibusdam unde, dolore quod dolorem molestias et voluptatem repellendus neque! Voluptatum voluptatem eos ullam ea cupiditate, ratione, minus sapiente doloribus qui cumque illum impedit quia error odit non aliquam suscipit accusamus minima quae. Nesciunt corporis ad fugit tenetur quia dolor! Expedita aspernatur repellendus itaque animi asperiores exercitationem rem esse explicabo neque similique, ipsa ratione vitae soluta doloribus magnam aperiam dolores molestias quae? Minima excepturi tempora facere maiores sequi rerum accusamus non inventore, atque natus labore distinctio! Ad nobis eaque impedit neque error eveniet cupiditate dolorem, ducimus perspiciatis, recusandae aperiam ipsum veritatis totam mollitia quam deserunt quod reiciendis. Consectetur quas illo eveniet placeat eum corporis animi, vitae architecto nulla aut neque repellat impedit quos eligendi. Fugit repellendus aliquam laborum esse vel. Ratione consequatur id ex a nostrum nesciunt, ad delectus culpa sed iste odio iure debitis omnis totam amet necessitatibus temporibus magnam velit non sapiente sit assumenda sunt! Distinctio sapiente facere suscipit perspiciatis delectus quisquam commodi ut iure, quidem libero doloribus explicabo consequuntur culpa voluptatum reprehenderit! Totam iure inventore veniam, facilis est voluptatem natus dicta deserunt quia provident vero nam labore alias quod culpa id tempore numquam sapiente. Excepturi sed est id, placeat ex eius modi perferendis animi sunt laudantium recusandae tempore nisi quaerat obcaecati explicabo dicta laboriosam, ducimus, veritatis minus iure amet corporis vitae expedita sint? Voluptatum expedita assumenda quas a ratione laboriosam odit. Error rerum nam eum sit accusamus inventore illum vel, aliquid id provident ipsa distinctio numquam voluptate hic nisi ratione reprehenderit, repellat necessitatibus incidunt. Cupiditate vero qui eaque ratione, aspernatur sequi molestias quas inventore asperiores reiciendis doloribus voluptates. Doloremque, nemo consequuntur alias reiciendis adipisci autem vel sequi minus hic at magni vitae. Dicta nam doloremque nostrum sapiente. Eos qui voluptas perferendis sequi iste maiores tempore, illo illum, temporibus quos aliquam deleniti ipsum eveniet nihil ipsam magnam porro ea maxime. Aliquid atque cupiditate optio ex hic molestias reiciendis ipsa expedita exercitationem assumenda dolor aut doloribus dolorum, odit architecto debitis, accusamus a ipsam illum? Iste adipisci laudantium, mollitia asperiores omnis illum ullam, odio, dignissimos sapiente quidem voluptate vel cumque. Perspiciatis porro, aliquid id maiores voluptates ipsum dolor rerum iusto! Dolorem enim a, deserunt tempore nobis reprehenderit ad odio dicta labore, earum, placeat fuga tempora explicabo voluptas nulla nihil hic architecto praesentium cumque voluptatibus pariatur nisi? Voluptatum veritatis quo deserunt quis perferendis eveniet aliquid. Architecto dolores dolorem eum inventore accusantium qui quod ducimus? Molestiae ratione laboriosam doloremque obcaecati at nemo aut officiis nihil perspiciatis aperiam repellat consequatur provident quia, cupiditate similique cum quos quod. Modi esse explicabo labore nobis, corporis in vero porro dolorum, facilis assumenda officiis natus nam, doloremque incidunt eos omnis. Vero explicabo facilis laboriosam quibusdam eius minus, possimus, quia aut voluptates nobis laudantium culpa deleniti! Repellat doloribus suscipit illum, harum facilis optio blanditiis vel dolorum doloremque quaerat placeat? Porro alias accusamus, aspernatur voluptas doloremque similique eaque id quaerat. Id tenetur, saepe nam distinctio error, totam fugit explicabo, similique in quidem quia eveniet repellendus dolore incidunt iste eos aperiam. Saepe odit soluta rerum quia consequatur, atque deserunt asperiores porro consectetur quo, aperiam temporibus suscipit. Molestias optio aut sint voluptatem perspiciatis exercitationem consequatur itaque ipsum aperiam dolorum explicabo consequuntur tempora deleniti ea quod, iusto velit repellat totam repellendus animi facere eius porro. Nostrum sapiente ab aperiam voluptatem! Beatae voluptatibus nihil cumque ipsa quaerat qui voluptatum ad minus velit hic voluptates, necessitatibus dignissimos libero. Cum nisi blanditiis minima quod optio reprehenderit, dignissimos amet illum omnis, in sequi dolores ex quibusdam quam id maxime provident sint dolorum, impedit iste eius necessitatibus! Quam, excepturi voluptatum labore animi itaque omnis aperiam, possimus provident eius tenetur sunt ab iusto. Corporis, ducimus. Quod consectetur ipsum reiciendis alias ipsa ullam libero non ab similique modi. Quisquam fuga ad, quasi quos expedita minus esse tenetur rem suscipit aut, neque officia. Nulla similique, ullam et magni omnis veniam vero ipsa dolore mollitia voluptatem consequatur quae reiciendis a hic voluptas, officia, molestiae labore maiores quia deserunt quos magnam ducimus? Suscipit odit dicta iste, eveniet commodi accusantium qui nostrum sint corporis debitis? Voluptates, necessitatibus tempora? Sapiente, sit consectetur a doloremque odio, repellat doloribus magni accusantium vero qui suscipit. Beatae necessitatibus consectetur ducimus neque eum eaque molestias ratione, id at labore quaerat ipsa quo commodi ea minima assumenda sapiente pariatur, quod velit nulla quas tenetur. Quae architecto non quibusdam ipsam, temporibus voluptates beatae unde, perferendis sit totam debitis repudiandae cum nisi quaerat provident aut eveniet porro, ut quia ipsa. Nesciunt dignissimos nemo blanditiis eum, cupiditate ducimus aspernatur dolorem quod sunt velit tempore placeat eveniet iusto commodi quae, magni impedit, minus obcaecati repudiandae laudantium? Quasi, nobis. Amet expedita eligendi modi nisi aperiam reiciendis quo odio totam, dignissimos aliquid! Officiis et, sit optio velit animi, debitis recusandae consequatur earum laborum unde, iure consectetur numquam! Repellendus, tenetur! Iusto enim suscipit animi molestiae aspernatur ipsam eaque obcaecati, a corporis accusamus? Dicta nihil necessitatibus ex fugit illo fuga expedita facilis alias, iure quidem, ducimus placeat culpa quas tenetur. Dolore sit delectus debitis pariatur, expedita ut inventore magni ullam eligendi dolores deserunt dolorem ipsam molestias natus saepe odit tenetur fugiat labore ea cumque. Ducimus consectetur expedita nisi et sequi aut nesciunt eaque! Hic tempora, suscipit asperiores numquam facilis ea soluta, ipsam veniam in ad nesciunt saepe modi officia atque animi totam. Ratione aliquam iste maiores cumque officia quos, nam quisquam sunt animi molestias repellat adipisci reiciendis facere omnis optio nulla, numquam doloribus, iusto laboriosam? Doloribus iure officia sequi laboriosam sint harum veniam dicta magnam voluptates, qui iusto tempore ex quae necessitatibus explicabo iste porro soluta. Itaque, sint. Reprehenderit vero, at est tempore, earum saepe rerum maiores sequi beatae accusamus velit optio voluptas soluta, animi quasi dicta praesentium adipisci. Nobis earum, harum officiis corrupti, animi at quaerat fugit aliquid numquam vitae doloremque temporibus magni? Rem sapiente inventore consectetur laudantium adipisci. Libero provident ducimus error id doloribus aliquid vero architecto eveniet, cumque quos fugiat autem, cum vel. Consectetur nemo repellendus voluptas magnam rem? Quasi earum, blanditiis unde placeat tempora quod amet modi dolores iste, enim fugit non laborum. Aperiam et sapiente dolorem qui sequi, in facilis!
                    </p></main>
                <footer className={s.footer_dash}></footer>
            </div>

            <style>{"\
        body{\
          overflow:hidden;\
          height:100vh;\
        }\
      "}</style>
        </div>
    )
};

const LastSectedItems = (props) => {
    return (
        <div className={`${s.content_block} ${s.lastSelected_view}`}>
            <header>
                <h2 className={s.title}>Last added positions:</h2>
                <div className={s.prop_block}>
                    <div className={s.prop_search}>
                        <input type="text" id="search_lastSelected" placeholder="Search..." />
                    </div>
                    <div className={s.prop_select}>
                        "buttons or dropdown menu"
                    </div>
                </div>
            </header>
            <div className={s.lastSelected_content}>
                <div className={s.lastSelected_head}>
                    <div className={s.cell}>Coin</div>
                    <div className={s.cell}>Price</div>
                    <div className={s.cell}>Source</div>
                    <div className={s.cell}>24h</div>
                    <div className={s.cell}>Holdings</div>
                </div>
                <div className={s.lastSelected_item}>
                    <div className={s.cell}>BTC</div>
                    <div className={s.cell}>$32 000</div>
                    <div className={s.cell}>Google. inc</div>
                    <div className={s.cell}>2.23</div>
                    <div className={s.cell}>$100</div>
                </div>
                <div className={s.lastSelected_item}>
                    <div className={s.cell}>ETH</div>
                    <div className={s.cell}>$2 700</div>
                    <div className={s.cell}>Google. inc</div>
                    <div className={s.cell}>2.23</div>
                    <div className={s.cell}>$200</div>
                </div>
            </div>
        </div>
    )
}


const SearchResults = (props) => {
    const [isShow, set] = useState(false);
    //hide results
    const e = useRef(null);
    useOutsideClickHide(e, set);

    return (
        <div className={s.dashboard_search} ref={e}>
            <input onFocus={() => set(true)} type="text" id="db_search" />
            <div className={`${s.search_results} ${isShow ? s.show_results : ''}`}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Search:</span>
                    <div>ege</div>
                </div>
            </div>
        </div>
    )
}

const ProfSettings = (props) => {
      const [isShow, set] = useState(false);
      //hide menu
      const e = useRef(null);
      useOutsideClickHide(e, set);
    return (
        <div className={`${s.dashboard_wrapper} ${isShow ? s.show_settings : ''}`} ref={e}>
            <div className={s.dashboard_cuser} onClick={() => set(!isShow)}>
                <div className={s.cuser_avatar}><img src="aboba" alt="" /></div>
                <span className={s.cuser_name + ' ic-dropdown'}>Tomas Rohan</span>
            </div>
            <div className={s.cuser_settings}>
                <div className={s.drop_overlay}><span className={s.drop_t}>Settings:</span>
                    <div>
                        <div>egeee</div>
                        <div>egeee</div>
                        <div>egeee</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const LastNotifications = () => {
    const [isShow, set] = useState(false);
    const e = useRef(null);
    useOutsideClickHide(e, set);

    return (
        <div ref={e} className={`${s.dashboard_notifications} ${isShow ? s.show_block : ''}`}>
            <button className={s.dash_notific} onClick={() => set(!isShow)}>Notifications</button>
            <div className={s.notif_block}>
                <div>egeee</div>
                <div>egeee</div>
                <div>egeee</div>
            </div>
        </div>
    )
}

export default Dashboard;
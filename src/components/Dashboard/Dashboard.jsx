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
                    <LastSectedItems items={props.last} />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dignissimos at, consectetur assumenda explicabo maiores quod dolor sed iure exercitationem reprehenderit autem eius tempora cupiditate in perspiciatis neque recusandae unde vero quas officia. Voluptate officia sapiente saepe non eos impedit atque sint. Saepe beatae consequatur illo, placeat dolor, fuga fugit in aliquid sunt atque labore incidunt. Repellendus laboriosam libero amet. Ipsa unde, dignissimos accusantium nostrum sunt suscipit dolorum quas placeat nesciunt molestiae tempore debitis natus reiciendis iure architecto rerum corporis ab. Excepturi enim facere nam eos delectus eveniet perferendis eligendi quo iste, a molestiae adipisci. Saepe, itaque voluptatem nisi tempora officia aspernatur expedita quaerat voluptates accusamus, ullam quam similique nesciunt blanditiis iusto ab temporibus quasi recusandae, illum possimus quisquam! Excepturi nihil iure quod! Aliquam excepturi, facere voluptatum, modi dolorum perspiciatis quae corporis iste eaque, sapiente nemo commodi ducimus quod tempore tempora. Modi aspernatur dolorum iste deleniti eos aliquid blanditiis illum nam, vel sapiente nesciunt veritatis quas ipsa! Fuga error ad delectus nobis molestiae exercitationem quibusdam possimus deserunt reiciendis ducimus libero enim omnis nesciunt pariatur iure iste doloribus harum nihil laboriosam, beatae nulla corporis eum. Vero facere, minus, at odio nam in similique assumenda commodi harum voluptatem libero amet mollitia omnis eveniet repellat tenetur accusamus? Asperiores cumque laboriosam excepturi voluptate vitae accusantium sapiente itaque ea iure debitis eos, maxime id! Ratione, possimus quis! Ipsam at, sed saepe harum debitis a. In totam ab repudiandae hic quibusdam enim itaque voluptatibus necessitatibus. Cumque provident rerum in sunt sit minus dolor tempora repudiandae rem culpa! Nam necessitatibus corporis dolor, quo eos vel error dignissimos nisi sapiente unde similique nemo repellendus quibusdam a quis cum repudiandae soluta voluptas ipsam magnam reiciendis in mollitia! Veniam hic quod nobis error corrupti cum incidunt possimus maxime sint sapiente, reprehenderit repellendus vel quis! Ex, voluptatem ea illo mollitia accusamus perspiciatis vitae ipsum. Possimus delectus ducimus ipsam cum explicabo dolor vitae tempore blanditiis earum at magnam totam, praesentium officiis a pariatur aliquam unde sint cumque molestias voluptate asperiores, laboriosam excepturi. Debitis in asperiores, ullam optio cum rerum doloremque doloribus, facere consectetur officiis unde ipsa assumenda consequuntur ea suscipit similique eaque, corporis blanditiis quasi natus quis nobis amet. Sapiente illum fuga temporibus laboriosam reprehenderit in, culpa fugiat laborum? Est ad laudantium architecto exercitationem ipsa quisquam natus temporibus voluptatibus quibusdam sit, libero corporis et tempore omnis neque odit autem blanditiis dignissimos alias voluptates ducimus iure. Nam, ex recusandae possimus, nisi culpa laudantium, expedita laborum inventore eos odio quasi voluptatum ipsam labore tenetur dicta modi aperiam natus? Eveniet hic nobis quibusdam delectus doloribus fugiat, iure autem corrupti ratione blanditiis atque aliquam tenetur minus quod molestiae, aspernatur quae laboriosam, eaque et. Alias accusamus mollitia dolorum similique perspiciatis distinctio repellendus eius est hic blanditiis labore esse maiores accusantium magni at necessitatibus, consectetur doloremque velit. Dolor magni itaque iste hic? Magnam ea id, iusto sed unde modi accusantium obcaecati a iste non praesentium sapiente doloribus dignissimos consectetur! Accusamus maxime magni eveniet, harum architecto voluptatum. Numquam nihil doloremque consequuntur consequatur sunt veritatis error maxime vitae libero quisquam.</p>
                </main>
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

const LastSectedItems = ({ items }) => {
    //map items
    items = items.map(e => {
        return (
            <tr key={e.id} className={s.selected_item}>
                <td className={s.cell}><img class={s.prev} src={e.logoUrl} alt={e.name}/><span>{e.name}</span></td>
                <td className={s.cell}><span>${e.price}</span></td>
                <td className={s.cell}><span>{e.source}</span></td>
                <td className={s.cell}><span>{e.daychange.diff}{e.daychange.isUp ? ' +' : ' -'}</span></td>
                <td className={s.cell}><span>${e.holdings}</span></td>
            </tr>
        );
    })
    return (
        <div className={`${s.content_block} ${s.selected_view}`}>
            <header>
                <h2 className={s.title}>Last added positions:</h2>
                <div className={s.prop_block}>
                    <div className={s.prop_search}>
                        <input type="text" id="search_selected" placeholder="Search..." />
                    </div>
                    <div className={s.prop_selected}>
                        "buttons or dropdown menu"
                    </div>
                </div>
            </header>
            <div className={s.selected_overlay}>
                <table className={s.selected_list}>
                    <tr className={s.selected_head}>
                        <th className={s.cell}><span>Coin</span></th>
                        <th className={s.cell}><span>Price</span></th>
                        <th className={s.cell}><span>Source</span></th>
                        <th className={s.cell}><span>24h</span></th>
                        <th className={s.cell}><span>Holdings</span></th>
                    </tr>
                    {items}
                </table>
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
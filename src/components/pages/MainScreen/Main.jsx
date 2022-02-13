import React from 'react';
import HeaderMain from '../../UI/Header/Header';
import s from './Main.module.css';

const Main = (props) => {
    return (
        <div>
            <HeaderMain headTrends={props.headTrends}/>
            <div className={`${s.main_content} content-wrapper`}>
                <h1>Header title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus ut, quaerat deleniti fugit porro provident quod veniam aliquid, facere inventore culpa. Expedita a iste perferendis accusantium necessitatibus nam, consequuntur, fugit iusto voluptates provident omnis aperiam alias harum inventore amet perspiciatis? Voluptatem dignissimos facere, aliquam, officiis magni labore autem, minus ducimus ipsa impedit enim neque assumenda adipisci? Tempore cum quia temporibus rem laboriosam culpa dolorem, doloremque dolore sunt ut ducimus eaque deserunt dignissimos amet dolores accusamus tenetur fugiat dolor sequi facere minus? Deleniti itaque blanditiis, obcaecati necessitatibus enim, consequatur fuga saepe consequuntur, ea recusandae adipisci. Eligendi commodi fuga similique inventore libero et, corporis laudantium numquam nulla, aspernatur deleniti molestiae cupiditate! Voluptatem maiores, esse veritatis odio ipsa rerum in voluptatum laboriosam autem quos nostrum necessitatibus! Et, possimus hic accusamus debitis aut veniam asperiores recusandae atque molestiae eius saepe quia! Dolores dolore optio, sapiente distinctio cupiditate repudiandae maiores saepe nam nulla perferendis ratione dicta veritatis magni, odio pariatur ipsum quo! Minus molestiae fuga exercitationem voluptatum eaque laborum quod neque aspernatur eius odio officia maiores, magnam totam aut dolore facilis iste unde deleniti eligendi nobis amet delectus dicta id. Possimus eos expedita quidem facilis commodi accusamus at voluptate quo, ducimus consequuntur obcaecati molestias? Alias, deleniti ut? Vero, ipsum quaerat explicabo aut saepe iste provident accusamus. Est impedit iste commodi error facilis labore inventore nemo in quae expedita nulla magnam quos, praesentium architecto, unde et doloribus, possimus quaerat eaque quod. Laudantium provident distinctio assumenda, eius illo reprehenderit minus, quia quam dignissimos velit pariatur repudiandae asperiores voluptate nam, magni nemo aperiam architecto ducimus autem ullam. Nemo autem consectetur molestias repellat maxime libero, numquam unde, voluptatibus minima, voluptatum veritatis explicabo! Provident commodi odit tenetur, a quisquam expedita dicta corrupti impedit veritatis amet architecto vitae doloribus laudantium quis harum debitis quod optio quaerat dolorem cum obcaecati exercitationem.</p>
            </div>
        </div>
    )
}

export default Main;
import icon01 from './main/main_icon_1.jpg'
import icon02 from './main/main_icon_2.jpg'
import icon03 from './main/main_icon_3.jpg'
import icon04 from './main/main_icon_4.jpg'
import icon05 from './main/main_icon_5.jpg'

import './Banner'

import './IconList.css'

function ListIcon(){
    return(
        <div className='iconwrap'>
            <div className='list'>
                <img src={icon01} alt='재단소식'/>
                <span>탄천연구 포럼</span>
                <h3>재단 소식</h3>
            </div>
            <div className='list'>
                <img src={icon02} alt='연구자료'/>
                <span>한눈에 확인하는</span>
                <h3>연구자료</h3>
            </div>
            <div className='list'>
                <img src={icon03} alt='1:1문의'/>
                <span>간편하게 하는</span>
                <h3>1:1문의</h3>
            </div>
            <div className='list'>
                <img src={icon04} alt='교육과정안내'/>
                <span>꼼꼼히 확인하는</span>
                <h3>교육과정안내</h3>
            </div>
            <div className='list'>
                <img src={icon05} alt='수강신청'/>
                <span>경영아카데미</span>
                <h3>수강신청</h3>
            </div>
        </div>
    )   
}

export default ListIcon;
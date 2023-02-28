import Images from './Images'

export default function Home(){
    return(
        <div className="page_wrap">
            <h2>제품 리스트</h2>
            <div className='list_wrap'>
            {
                Images.list.map(element => {
                return(
                    <div className='bnList'>
                        <div className='bnImg'>
                            <img src={element.imgsrc} alt={element.title} />
                        </div>
                        <p className='bnSub'>{element.sub}</p>
                        <p className='bnTitle'>{element.title}</p>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}
import MainSlide from './MainSlide'

export default function Home(){
    return(
        <div className="page_wrap">
            <h2>메인 - Home</h2>
            <div className="slide_info row_c">
                <div className="slide_academy">
                    <MainSlide />
                </div>
                <div className="info">
                    <span>소개</span>
                </div>
            </div>
        </div>
    )
}
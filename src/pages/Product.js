import ProductSlide from "./ProductSlide"

export default function Product(){
    return(
        <div>
            <h2>제품목록페이지</h2>
            {/* 4개 이미지 스와이퍼 슬라이드 */}
            <div className="food_slide">
                <ProductSlide />
            </div>
        </div>
    )
}
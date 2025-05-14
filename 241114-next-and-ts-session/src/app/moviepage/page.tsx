import StyledFont from "./components/StyledFont";
import StyledColumn from "./components/StyledColumn";

export default function MoviePage() {

	// apiClient 파일에서 정의한 API 호출 함수를 여기서 실행!

	return (
		<StyledColumn $width="100%" $alignitems="center" $justifycontent="center" $gap="1rem">
			<StyledFont $color="white" $font='1.5rem'>
				영화 페이지
			</StyledFont>
			{/* 여기에 /movie/now_playing API의 result를 그리드 형태로 반복출력! */}
		</StyledColumn>
	);
}
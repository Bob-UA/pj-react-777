import { DiaryProducts } from "../../components/DiaryProducts/DiaryProducts";
// import { DiaryExercise } from "../../components/DiaryExercises/DiaryExercises"
import { DiaryExercises } from "../../components/DiaryExercises/DiaryExercises";
import { Container } from './DiaryPage.styled';

export const DiaryPage = () => {
    

    return (
      <Container>
        {/* <DiaryProducts></DiaryProducts> */}
        <DiaryExercises></DiaryExercises>
      </Container>
    );
}

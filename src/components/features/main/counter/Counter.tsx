import { ButtonContainer, ButtonItem, Container, Title } from "./style";
import { useDispatch, useSelector } from "react-redux";
// import { useAppSelector } from "../../../redux/hooks";
import {
  decrement,
  increment,
  selectCurrentValue,
  toZero,
} from "../../../redux/countSlice";

function Counter() {
  const value = useSelector(selectCurrentValue);
  // const value = useAppSelector((state) => state.counter.value); -- usando um hook a fim de denifir uma interface genéria
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    if (value === 0) {
      return;
    }
    dispatch(decrement());
  };
  const handToZero = () => {
    dispatch(toZero());
  };
  return (
    <Container>
      <Title>{value}</Title>
      <ButtonContainer>
        <ButtonItem onClick={handleDecrement}>-1</ButtonItem>
        <ButtonItem onClick={handToZero}>Restart</ButtonItem>
        <ButtonItem onClick={handleIncrement}>+1</ButtonItem>
      </ButtonContainer>
    </Container>
  );
}

export default Counter;

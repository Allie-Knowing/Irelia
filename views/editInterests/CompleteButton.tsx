import { updateInterests } from "@apis/myPage";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { useMutation } from "react-query";
import INTERESTS_CATEGORIES from "@constants/interestCategory";

interface PropsType {
  buttonActive: boolean;
  names: string[];
}

const CompleteButton: FC<PropsType> = ({ buttonActive, names }) => {
  const useEditInterests = useMutation((interestsId: number[]) =>
    updateInterests(interestsId));

  const [interestsId, setInterestsId] = useState<number[]>([]);

  useEffect(() => {
    const a = INTERESTS_CATEGORIES.map((v) => {
      if (names.includes(v.name)) {
        return v.id;
      }
      return "";
    });

    setInterestsId(a.filter((v) => v !== ""));
  }, [names]);

  const onClick = () => {
    useEditInterests.mutate(interestsId);
  };

  if (useEditInterests.isSuccess) {
    alert("변경완료.");
  }

  return (
    <Container
      buttonActive={buttonActive}
      disabled={!buttonActive}
      onClick={onClick}
    >
      <Text>버튼</Text>
    </Container>
  );
};

export default CompleteButton;

const Container = styled.button<{ buttonActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ${(props) =>
  (props.buttonActive
    ? props.theme.colors.primary.default
    : props.theme.colors.grayscale.scale20)};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  font: ${({ theme }) => theme.fonts.body3};
  margin: 11px 147px;
`;

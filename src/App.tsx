import { ReactNode, useRef, useState } from "react";
import { css } from "../styled-system/css";
import { Flex } from "../styled-system/jsx";

const PAYOUT_ODDS = [5, 8, 11, 17, 35];

interface Result {
  input: string;
  payout: number;
  payoutOdds: number;
  betAmount: number;
  isCorrect?: boolean;
}

const Row = ({
  name,
  isCorrect,
  children,
}: {
  name: string;
  isCorrect?: boolean;
  children: ReactNode;
}) => {
  const color = isCorrect === undefined ? "black" : isCorrect ? "green" : "red";
  return (
    <Flex justify="space-between" align="center" mb="2">
      <div className={css({ fontSize: "lg", fontWeight: "bold" })}>{name}</div>
      <div>
        <span className={css({ color })}>{children}</span>{" "}
      </div>
    </Flex>
  );
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [chosenPayoutOdds, setChosenPayoutOdds] = useState(
    Math.floor(Math.random() * 5)
  );
  const [betAmount, setBetAmount] = useState(
    Math.floor(Math.random() * 20) + 1
  );

  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [result, setResult] = useState<Result | undefined>(undefined);

  const onSubmit = () => {
    if (!inputRef.current || !inputValue) return;
    const payoutOdds = PAYOUT_ODDS[chosenPayoutOdds];
    const payout = payoutOdds * betAmount;
    const isCorrect = payout === +inputValue;

    setResult({ input: inputValue, payout, payoutOdds, betAmount, isCorrect });
    setBetAmount(Math.floor(Math.random() * 20) + 1);
    setChosenPayoutOdds(Math.floor(Math.random() * 5));
    inputRef.current.value = "";
    setInputValue("");
  };

  return (
    <Flex align="center" direction="column" pt="20">
      <Flex className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        <div>{PAYOUT_ODDS[chosenPayoutOdds]}</div>*<div>{betAmount}</div>
      </Flex>

      <input
        ref={inputRef}
        type="number"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
      />

      <button
        className={css({
          mt: "4",
          mb: "10",
          py: "1",
          px: "5",
          borderRadius: "lg",
          backgroundColor: "blue.500",
          color: "white",
        })}
        onClick={onSubmit}
      >
        Submit
      </button>

      {result && (
        <div className={css({ maxW: "200px", w: "100%" })}>
          <Row name="Answer" isCorrect={result.isCorrect}>
            <b>{result.input}</b>
          </Row>
          <Row name="Question">
            {result.payoutOdds} * {result.betAmount}
          </Row>
          {!result.isCorrect && (
            <Row name="Result">
              <b>{result.payout}</b>
            </Row>
          )}
        </div>
      )}
    </Flex>
  );
}

export default App;

import { ReactNode, useRef, useState } from "react";
import { css } from "../styled-system/css";
import { Box, Flex } from "../styled-system/jsx";
import { BET_AMOUNT, PAYOUT_ODDS } from "./config/payoutOdds";
import { getWeightedRandom } from "./utils/getWeightedRandom";

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
  const color = isCorrect === undefined ? "white" : isCorrect ? "green" : "red";
  return (
    <Flex justify="space-between" align="center" mb="2">
      <Box fontSize="lg" fontWeight="bold">
        {name}
      </Box>
      <Box color={color}>{children}</Box>
    </Flex>
  );
};

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [payoutOdds, setPayoutOdds] = useState(getWeightedRandom(PAYOUT_ODDS));
  const [betAmount, setBetAmount] = useState(getWeightedRandom(BET_AMOUNT));
  const [result, setResult] = useState<Result | undefined>(undefined);

  const onSubmit = () => {
    const input = inputRef.current?.value;
    if (!input) return;
    const payout = payoutOdds * betAmount;
    const isCorrect = payout === +input;

    setResult({ input, payout, payoutOdds, betAmount, isCorrect });
    setBetAmount(getWeightedRandom(BET_AMOUNT));
    setPayoutOdds(getWeightedRandom(PAYOUT_ODDS));
    inputRef.current.value = "";
  };

  return (
    <Flex align="center" direction="column" pt="20">
      <Flex fontSize="2xl" fontWeight="bold">
        <div>{payoutOdds}</div>*<div>{betAmount}</div>
      </Flex>

      <input
        ref={inputRef}
        type="number"
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
        <Box maxW="200px" w="100%">
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
        </Box>
      )}
    </Flex>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import { useSatchel } from "../context/satchel/SatchelProvider";

const CreateOrRecoverWallet = () => {
  const { recoverWallet, createNewWallet } = useSatchel();
  return (
    <ScContainer>
      <ScTitle>New to Satchel Wallet?</ScTitle>
      <ScActionsContainer>
        <ScActionSection>
          <ScActionTitle>No, I already have a seed phrase</ScActionTitle>
          <ScActionSubtitle>
            Import your existing wallet using a 12 word seed phrase
          </ScActionSubtitle>
          <ScActionButton onClick={recoverWallet}>Import Wallet</ScActionButton>
        </ScActionSection>
        <ScActionSection>
          <ScActionTitle>Yes, let’s get set up!</ScActionTitle>
          <ScActionSubtitle>
            This will create a new wallet and seed phrase
          </ScActionSubtitle>
          <ScActionButton onClick={createNewWallet}>
            Create a Wallet
          </ScActionButton>
        </ScActionSection>
      </ScActionsContainer>
    </ScContainer>
  );
};

export default CreateOrRecoverWallet;

//
// Utils
//

const ScContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ScTitle = styled.div`
  font-size: 28px;
  text-align: center;
  margin-top: 65px;
`;
const ScActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
const ScActionSection = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 388px;
  height: 278px;
  box-sizing: border-box;
  margin-left: 22px;
`;
const ScActionTitle = styled.div`
  line-height: 28px;
  font-size: 20px;
  color: #000000;
  margin-top: 12px;
  text-align: center;
`;
const ScActionSubtitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #7a7a7b;
  margin-top: 10px;
  text-align: center;
`;
const ScActionButton = styled.button`
  max-width: 221px;
  height: 44px;
  color: #fff;
  margin: 35px 0 14px;
  border: 2px solid #037dd6;
  background-color: #037dd6;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
`;

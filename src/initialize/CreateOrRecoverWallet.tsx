import {
  Button,
  CalloutCard,
  Card,
  Collapsible,
  Form,
  FormLayout,
  InlineError,
  Layout,
  Page,
  Stack,
  TextField
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { useSatchel } from "../context/satchel/SatchelProvider";

const CreateOrRecoverWallet = () => {
  const [showSeedPhraseForm, setShowSeedPhraseForm] = useState<boolean>(false);
  const [seedPhrase, setSeedPhrase] = useState("");
  const [formError, setFormError] = useState<string>("");

  const { recoverWallet, createNewWallet } = useSatchel();

  const handleSubmit = useCallback(
    async _event => {
      try {
        await recoverWallet(seedPhrase);
      } catch (e) {
        console.log(e);
        setFormError(e.message);
      }
    },
    [recoverWallet, seedPhrase]
  );
  const toggleSeedPhraseForm = useCallback(
    () => setShowSeedPhraseForm(x => !x),
    []
  );

  return (
    <Page title="New to Satchel Wallet?">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="No, I already have a seed phrase" sectioned>
            <p>Import your existing wallet using a 12 word seed phrase</p>
            <br />
            <Stack vertical>
              <Button
                onClick={toggleSeedPhraseForm}
                ariaExpanded={showSeedPhraseForm}
                ariaControls="basic-collapsible"
                disabled={showSeedPhraseForm}
              >
                Import Wallet
              </Button>
              <Collapsible open={showSeedPhraseForm} id="basic-collapsible">
                <Form onSubmit={handleSubmit}>
                  <FormLayout>
                    <TextField
                      id="seedPhrase"
                      value={seedPhrase}
                      onChange={setSeedPhrase}
                      label="Seed phrase"
                      type="text"
                      autoFocus
                      helpText="Enter the seed phrase of 12 words separated by single spaces."
                    />
                    {formError && (
                      <InlineError message={formError} fieldID="seedPhrase" />
                    )}
                    <Button primary submit>
                      Submit
                    </Button>
                  </FormLayout>
                </Form>
              </Collapsible>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <CalloutCard
            title="Yes, let’s get set up!"
            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
            primaryAction={{
              content: "Create a Wallet",
              onAction: createNewWallet
            }}
          >
            <p>This will create a new wallet and seed phrase.</p>
          </CalloutCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default CreateOrRecoverWallet;

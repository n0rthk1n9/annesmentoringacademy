import { Introduction } from "../components/Introduction";
import { Motivation } from "../components/Motivation";
import { ProductFacts } from "../components/ProductFacts";
import { SubscribeForm } from "../components/SubscribeForm";

function University() {
  return (
    <div>
      <Introduction />
      <Motivation />
      <SubscribeForm />
      <ProductFacts />
      <SubscribeForm />
    </div>
  );
}

export default University;

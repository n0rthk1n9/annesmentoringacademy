import { Introduction } from "../components/Introduction";
import { Motivation } from "../components/Motivation";
import { SubscribeForm } from "../components/SubscribeForm";

function University() {
  return (
    <div className="bg-dark-khaki">
      <Introduction />
      <Motivation />
      <SubscribeForm />
    </div>
  );
}

export default University;

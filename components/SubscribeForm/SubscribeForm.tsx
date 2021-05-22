import { EmailInput } from "../EmailInput";
import { SubscribeButton } from "../SubscribeButton";

export function SubscribeForm(): JSX.Element {
  return (
    <form className="bg-white p-2 md:p-6 max-w mx-2 md:mx-20 my-2 md:my-20 rounded-xl shadow-md items-center">
      <EmailInput />
      <SubscribeButton />
    </form>
  );
}

interface ProductCardProps {
  img: string;
  content: string;
}

export function CustomerFeedbackCard(props: ProductCardProps): JSX.Element {
  const { img, content } = props;

  return (
    <div className="w-full bg-primary-light-terracotta text-gray-600 rounded-lg shadow-md p-2 md:p-6 flex space-x-2 md:space-x-5 mb-2 md:mb-4 lg:mb-6">
      <img className="h-12 rounded-full" src={img} alt="Customer img" />
      <div>{content}</div>
    </div>
  );
}

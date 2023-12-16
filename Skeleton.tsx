type Props = {
    width?: number;
    height?: number;
    pill?: boolean;
    square?: boolean;
    circle?: boolean;
};

export default function Skeleton(props: Props) {
  return (
      <div>
        <div className="animate-pulse">
            <div
                className={`bg-gray-200 ${props.pill ? 'rounded-full' : ''} ${!props.square ? 'rounded-lg' : ''} ${props.circle ? 'rounded-full' : ''}`}
                style={{
                    width: props.width ? props.width + 'px' : '100%',
                    height: props.height ? props.height + 'px' : '100%',
                }}
            ></div>
        </div>
      </div>
  )
}
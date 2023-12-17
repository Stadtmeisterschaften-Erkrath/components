type Props = {
  activeTab: string;
  tabId: string;
  className?: string;
  children: React.ReactNode;
};

export default function TabsContainer(props: Props) {
  return (
    <div className={props.className} hidden={props.activeTab !== props.tabId}>
      {props.children}
    </div>
  );
}

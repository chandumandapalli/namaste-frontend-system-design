// single Accordian item .. 
// always break the given  LLD into simple and small components.. 
const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  // if state var is used here .. if state is used here itself.. then every child will have its own state..
  // and they wont have interaction with each other.. ( then they become self controlled. components) 
  //since all of them should have this feature when one is open the other opened one should close..
  // so lifeting the state.. so that parent controls the state.. and when one is opened the prev opened will
  // be closed.. 
  //  now both of them are coming from the isOpen ..and func( ) to set it .. 
  return (
    <div className="border border-black ">
      <div
        className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
};
export default AccordionItem;

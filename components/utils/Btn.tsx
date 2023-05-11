type Props = {
    name: String;
    style?: React.CSSProperties
};

const Btn = ({ name, style }: Props) => {
    return ( 
        <button style={style} className=" p-2 rounded-md w-60 md:p-3 md:w-40 md:rounded-full">{name}</button>
     );
}
 
export default Btn;
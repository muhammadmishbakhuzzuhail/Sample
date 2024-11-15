import AnchorNavbar from "../molecules/AnchorNavbar";

const SubMenuNavbar = (props) => {
    const { items, className } = props;

    return (
        <ul className={className}>
            {items.map((item) => (
                <li>
                    <AnchorNavbar
                        href={item.href}
                        className={item.className}
                        svg={item.svg}
                        text={item.text}
                    />
                </li>
            ))}
        </ul>
    );
};
export default SubMenuNavbar;

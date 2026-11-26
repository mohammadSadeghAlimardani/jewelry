import "./Title.css";

const Title = (props) => {
    const { titleText } = props;

    return (
        <div className="title">
            <h3>{titleText}</h3>
            <div className="underline-title"></div>
        </div>
    );
};

export default Title;

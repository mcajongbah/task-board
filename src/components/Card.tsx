
type CardProps = {
    text: string;
}

export const Card: React.FC<CardProps> = ({ text }) => {
        return (
            <div className="card">{ text }</div>
        );
}
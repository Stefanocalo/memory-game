export function CardSection() {
    return(
        <div className="cardsSection">
                    {randomCards.map((card, index) => (
                        <Card
                        card={card}
                        key={index}
                         />
                    ))}
        </div>
    )
}
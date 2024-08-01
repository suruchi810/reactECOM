const FormatPrice = ({ price }) => {
    return (
        <span>
            {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(price / 100)}
        </span>
    );
};

export default FormatPrice;

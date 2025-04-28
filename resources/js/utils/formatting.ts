function convertToCurrency(amount: string)
{
    const amount_float = parseFloat(amount) / 100;
    if (amount_float) {
        return new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
        }).format(amount_float);
    } else return "-"
}

export {
    convertToCurrency,
}

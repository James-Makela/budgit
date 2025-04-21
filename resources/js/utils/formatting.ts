function convertToCurrency(amount: string)
{
    return new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
    }).format(parseFloat(amount));
}

export {
    convertToCurrency,
}

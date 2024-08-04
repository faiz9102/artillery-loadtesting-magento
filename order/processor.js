function captureGuestCartId(req, res, context, events, next) {
    let id = res.body.replace(/["\\]/g, '');
    context.vars.guestCartId = id;
    return next();
}

function captureToken(req, res, context, events, next) {
    let token = res.body.replace(/["\\]/g, '');
    context.vars.authToken = token;
    return next();
}

function captureCartId(req, res, context, events, next) {
    let id = res.body.replace(/["\\]/g, '');
    context.vars.cartId = id;
    return next();
}

function getRandomQty(requestParams, context, ee, next) {
    let number = Math.floor(Math.random() * 5) + 1; // 1 to 5
    context.vars.qty = number;

    return next();
}
function captureOrderID(req, res, context, events, next) {
    let id = res.body.replace(/["\\]/g, '');
    context.vars.orderId = id;
    return next();
}

module.exports = {
    captureToken: captureToken,
    captureCartId: captureCartId,
    captureGuestCartId: captureGuestCartId,
    getRandomQty: getRandomQty,
    captureOrderID: captureOrderID
};
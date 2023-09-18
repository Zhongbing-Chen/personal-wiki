1. Intro
Minimize the error between actual value and predicted value
$$Y-\hat{Y}
$$
Introduce the MSE with [[0. Supervised Learning]]

2. Formalization
Minimize the sum of errors in the following
$SSE(\beta) = \sum_{i=1}^n (y_i - \hat{y}_i)^2$
$SSE(\beta) = (Y-\hat{Y})^{\mathrm{T}}(Y-\hat{Y})$
$SSE(\beta)=(Y-X\beta)^{\mathrm{T}}(Y-X\beta)$
min $SSE(\beta)$

$(y-x\beta)^2$
$2\times (y-x\beta)\times -x$
3. Optimization by
https://en.wikipedia.org/wiki/Matrix_calculus

4. Analytic Solution
$\frac{\partial SSE}{\partial \beta} = -2X^T(Y - \hat{Y}) = 0$

Result ?
$$-2X^T(Y - \hat{Y}) =0=-2X^T(Y-X\beta)$$


$$2X^TY=2X^TX\beta$$
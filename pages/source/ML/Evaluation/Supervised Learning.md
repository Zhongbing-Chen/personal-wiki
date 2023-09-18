
# MSE
There are many types loss function. The most frequently use case is the Mean Square Error

MSE:
$$MSE = (y-\hat{y})^2$$
# Entropy 

^Entropy
Suprise:
1. A certain event is unsurprising and yields no information
2. The less probable an event is, the more surprising it is and the more information it yields
3. If two independent events are measured separately, the total amount of information is the sum of the self-informations of the individual events
	1. $I(xy)=I(x)+I(y)$
	2. $I(阿根廷夺冠)=I(阿根廷进了决赛)+I(阿根廷赢了决赛)$
4. induced by Cauchy's functional equation (https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation)
$$
I(x) := -log_b[P]
$$

Entropy: 
$-plog(p)=0$

$$
H(p) = -∑(p(x) \times log(p(x)))
$$
KL Divergence:
$$
\begin{align*}
D_{KL}(p || q) &= ∑(p(x) * log(\frac{p(x) }{ q(x)}))\\
&= \sum(p(x)\times (log(p(x))-log(q(x))))\\
&= \sum(p(x)\times (I_{q}(x)-I_{p}(x)))\\
&= \sum(p(x)\times-log(q(x))-(p(x)\times -log(p(x)))))
\end{align*}

$$

Cross Entropy: 

$$
\begin{align*}
H(p, q) &=  -\sum(p(x) \times log(q(x)))\\
&= H(p) + D_{KL}(p||q)
\end{align*}
$$




Generative
	概率分布
Discriminative
	data-driven


> This is the basic application in ml and dl

There are many ways to classify.
1. Regression
	1. Problem: The model will be penalized by the outlier examples
	2. Problem: Can't link different classes directly
2. Naive Bayes
	1. Function:$$P(y|X) = \frac{P(X|y) \times P(y)}{ P(X)}$$where $P(X|y) = P(x_1|y) \times P(x_2|y) \times ... \times P(x_n|y)$ 
	2. Loss Function: None
	3. Optimization: None
3. Decision Tree
	1. Next time
4. Logistics
	1. Function: Logistics Function$$P(C_{i}|x)= \frac{1}{1 + e^{-z}}$$where $z$ is a linear function with independent variables and their corresponding parameters
	2. Loss Function: [[0. Supervised Learning#^Entropy]]
	3. Optimization: [[2. Gradient Descent]]
5. Softmax
	1. Function: Softmax Function $$P(C_i|x)=   \frac{exp(x_i)}{\sum(exp(x_j))}$$
	2. Loss Function: [[0. Supervised Learning#^Entropy]]
	3. Optimization: [[2. Gradient Descent]]
	4. Limitation: 
		1. Hard to handle the situation like XOR
		2. It can be revised by feature transformation
		3. Cascading logistic models -> NN
6. Random Forest
7. Support Vector Machines
8. Neural Network
9. MLP
10. KNN



​

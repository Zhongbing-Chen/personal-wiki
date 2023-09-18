
1. Gradient
	1. $\nabla a$
2. Formoalize
	1. $\theta^* = arg min_{\theta} L(\theta)$
	2. $\theta^{i+1} = \theta^{i} - \delta \nabla L(\theta)$
	3. Proof (HW1 [[Linear Regression]])
3. Process
	1. Learning Rate
	2. Batch Size
	3. Initiation
4. Pesudo code
```
t ← 0
max_iterations ← 1000
w, b ← initialize randomly

while t < max_iterations do
    t ← t + 1
    w_t+1 ← w_t − η ∇w_t
    b_t+1 ← b_t − η ∇b_t
end
```
1.  Adaptive Learning Rate
2. Stochastic Gradient Descent
		1. Sum up part of data to get the loss
3. Limitation
	1. Local Min
	2. Saddle Point
		1. ![[Pasted image 20230902105528.png]]

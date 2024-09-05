---
title: Various symmetry definitions
tags: 
    [symmetries, definitions]
---

In Olver's book [^fn1] one encounters a fair few different notions of symmetries of equations. In this note we are going to overview a few of them briefly, and finally compare them against each other. 

Throughout this note we let $$ M = X \times U $$ be the space of independent and dependent variables. 

The first definition we will consider is the one concerning group actions on functions. 
>[!quote] Definition (Symmetry group)
>A *symmetry group* of a system $$ \mathscr{S} $$ of differential equations is a local group of transformations $$ G $$ acting on an open subset of $$ M $$ such that whenever $$ u = f(x) $$ is a solution of $$ \mathscr{S} $$, and assuming the action $$ g\cdot f $$ is defined for $$ g\in G $$, then $$ \tilde{u} = g\cdot f(x) $$ is another solution to the system $$ \mathscr{S} $$.

This definition is relatively straight-forward save for the intricacies of *local group of transformations*, which unfortunately also restricts what kind of solutions are permissible to the system $$ \mathscr{S} $$. 


[^fn1]: P. Olver, Applications of Lie Groups to Differential Equations. Springer New York, 1993.
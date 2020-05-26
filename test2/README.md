# Test 2

A string S consisting of uppercase English letters is given. In one move we can delete seven letters from S, forming the word “BALLOON” (One ‘B’, one ‘A’, two ‘L’s, two ‘O’s and one ’N’), and leave a shorter word in S. If the remaining letters in the shortened S are sufficient to allow another instance of the word “BALLOON” to be removed, next move can be done. What is the maximum number of such moves that can be apply to S?

Write a function”

```function solution(S);```

That, given a string S of length N, returns the maximum number of moves that can be applied.

Examples:

1. Given S = "BAONXXOLL" the function should return 1;

BAONXXOLL -> XX

2. Given S = "BAOOLLNNOLOLGBAX" the function should return 2.

BAOOLLNNOLOLGBAX -> BOLLNOGAX -> GX

3. Given S = "QAWABAWONL", the function should return 0.

QAWABAWONL

4. Given S = "ONLABLABLOON", the function should return 1.

ONLABLABLOON -> OLABN

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..200,000];
- string S consists only of uppercase letters (A - Z)
# TS DS - Queues

## Requirements:

-   Create one file and one commit per exercise.

-   Attempt each questions using `ts`.

-   Create the necessary `tsconfig` file and rules.

## Questions:

1.  Reverse a queue

    ```js
    const starbucks = [1, 2, 3, 4, 5];
    HINT: You can use a Stack
    ```

2.  Compare if 2 queues are equal

    ```js
    const q1 = [1, 2, 3, 4, 5];
    const q2 = [5, 4, 3, 2, 1];
    const q3 = [1, 2, 3, 4, 5];
    ```

3.  Determines if the queue is a palindrome (same items forward and backwards).

    ```js
    const starbucks = ["R", "O", "T", "A", "T", "O", "R"];
    ```

4.  Given a number N, write a function that generates and prints all `binary numbers` with decimal values from 1 to N (This problem is similar to [leetcode question #933](https://leetcode.com/problems/number-of-recent-calls/description/?envType=problem-list-v2&envId=queue&difficulty=EASY)).
    Follow the given steps to solve the problem:

    1.  Create an empty queue of strings

    2.  Enqueue the first binary number “1” to the queue.

    3.  Now run a loop for generating and printing n binary numbers.

    4.  Dequeue and Print the front of queue.

    5.  Append “0” at the end of front item and enqueue it.

    6.  Append “1” at the end of front item and enqueue it.

## Optional Leet Code Questions: 

 * [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/description/?envType=problem-list-v2&envId=queue&difficulty=EASY)
 * [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=queue&difficulty=EASY)
 * [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/description/?envType=problem-list-v2&envId=queue&difficulty=EASY) 
 * [2073. Time Needed to Buy Tickets](https://leetcode.com/problems/time-needed-to-buy-tickets/description/?envType=problem-list-v2&envId=queue&difficulty=EASY)
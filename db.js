const leetcodeProblems = [
    { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
    { title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/" },
    { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { title: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
    { title: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
    { title: "Zigzag Conversion", url: "https://leetcode.com/problems/zigzag-conversion/" },
    { title: "Reverse Integer", url: "https://leetcode.com/problems/reverse-integer/" },
    { title: "String to Integer (atoi)", url: "https://leetcode.com/problems/string-to-integer-atoi/" },
    { title: "Palindrome Number", url: "https://leetcode.com/problems/palindrome-number/" },
    { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/" },
    { title: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/" },
    { title: "Integer to Roman", url: "https://leetcode.com/problems/integer-to-roman/" },
    { title: "Roman to Integer", url: "https://leetcode.com/problems/roman-to-integer/" },
    { title: "Longest Common Prefix", url: "https://leetcode.com/problems/longest-common-prefix/" },
    { title: "3Sum", url: "https://leetcode.com/problems/3sum/" },
    { title: "3Sum Closest", url: "https://leetcode.com/problems/3sum-closest/" },
    { title: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
    { title: "4Sum", url: "https://leetcode.com/problems/4sum/" },
    { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
    { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
    { title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/" },
    { title: "Swap Nodes in Pairs", url: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
    { title: "Reverse Nodes in k-Group", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
    { title: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
    { title: "Valid Sudoku", url: "https://leetcode.com/problems/valid-sudoku/" },
    { title: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/" },
    { title: "Word Search", url: "https://leetcode.com/problems/word-search/" },
    { title: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
    { title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/" },
    { title: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/" },
    { title: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
    { title: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
    { title: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" },
    { title: "Valid Number", url: "https://leetcode.com/problems/valid-number/" },
    { title: "Plus One", url: "https://leetcode.com/problems/plus-one/" },
    { title: "Add Binary", url: "https://leetcode.com/problems/add-binary/" },
    { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
    { title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
    { title: "Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
    { title: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/" },
    { title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" },
    { title: "Subsets", url: "https://leetcode.com/problems/subsets/" },
    { title: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/" },
    { title: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
    { title: "Maximal Rectangle", url: "https://leetcode.com/problems/maximal-rectangle/" },
    { title: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
    { title: "Pow(x, n)", url: "https://leetcode.com/problems/powx-n/" },
    { title: "Majority Element", url: "https://leetcode.com/problems/majority-element/" },
    { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
    { title: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
    { title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
    { title: "Same Tree", url: "https://leetcode.com/problems/same-tree/" },
    { title: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/" },
    { title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
    { title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/" },
    { title: "Minimum Depth of Binary Tree", url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
    { title: "Path Sum", url: "https://leetcode.com/problems/path-sum/" },
    { title: "Path Sum II", url: "https://leetcode.com/problems/path-sum-ii/" },
    { title: "Flatten Binary Tree to Linked List", url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
    { title: "Binary Tree Maximum Path Sum", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
    { title: "Construct Binary Tree from Preorder and Inorder Traversal", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
    { title: "Binary Tree Zigzag Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
    { title: "Populating Next Right Pointers in Each Node", url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
    { title: "Convert Sorted Array to Binary Search Tree", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
    { title: "Balanced Binary Tree", url: "https://leetcode.com/problems/balanced-binary-tree/" },
    { title: "Binary Tree Paths", url: "https://leetcode.com/problems/binary-tree-paths/" },
    { title: "Find Minimum in Rotated Sorted Array", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
    { title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { title: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/" },
    { title: "Combination Sum II", url: "https://leetcode.com/problems/combination-sum-ii/" },
    { title: "Minimum Cost Climbing Stairs", url: "https://leetcode.com/problems/minimum-cost-climbing-stairs/" },
    { title: "House Robber", url: "https://leetcode.com/problems/house-robber/" },
    { title: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/" },
    { title: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/" },
    { title: "Best Time to Buy and Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
    { title: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/" },
    { title: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring/" },
    { title: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" }]
  
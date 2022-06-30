package main

import "fmt"

func reverse(x int) int {

	negtive_x := 1
	if x < 0 {
		negtive_x = -1
		x *= negtive_x
	}
	limit := 2147483648

	reverse := 0
	for x > 0 {
		reverse = (reverse * 10) +  x % 10
		x /= 10
	}

	if reverse > limit - 1 || reverse < -limit {
		return 0
	}
	return reverse * negtive_x
}

func main() {
    x := -123;
	fmt.Println(reverse(x));

}
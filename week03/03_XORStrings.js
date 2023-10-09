function strings_xor(s, t) {
    let res = ''
    
    for (let i in s) {
        if (s[i] == t[i]) res += '0'
        else res += '1'
    }

    console.log(res)
}

// #  def strings_xor(s, t):
// #      res = ""
// #      for i in range(len(s)):
// #          if s[i] == t[i]:
// #              res += '0';
// #          else:
// #              res += '1';

// #      return res

// #  s = input()
// #  t = input()
// #  print(strings_xor(s, t))

strings_xor('10111', '00110')
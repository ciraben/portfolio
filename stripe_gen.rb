mini = true
# width = gets.chomp.to_i
width = 2
maxi = 100 / width

white = "rgba(255, 255, 255, 1)"
black = "rgba(0, 0, 0, 1)"

inbetween = (0..maxi).map { |i|
  if i.even?
    "  rgba(0, 0, 0, 1)          #{i * width}% #{i * width + width}%,"
  else
    "  rgba(255, 255, 255, 1)    #{i * width}% #{i * width + width}%,"
  end
}.join("\n")

out = <<OUT
background: linear-gradient(
  45deg,
  rgba(255, 255, 255, 1)    0%,
#{inbetween}
  rgba(255, 255, 255, 1)    100%
);
OUT

if mini
  out = out.split().join(' ')
end

puts out

import { render } from "@testing-library/react"
import StatsBox from "./StatsBox"

describe(StatsBox, () => {
  it("renders accordingly", () => {
    const { container } = render(<StatsBox title="title" count={200} showTarget showPercentage target={240} />)
    expect(container).toHaveTextContent("title")
    expect(container).toHaveTextContent("200/240")
    expect(container).toHaveTextContent("83.33")
  })
})

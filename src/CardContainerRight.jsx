import icon_calculator from "./images/icon-calculator.svg";

export function CardContainerRight() {
  return (
    <div class="card_container_right">
			<div class="card_4">
				<p class="card_title">
					Calculator
				</p>
				<p class="card_description">
					Uses data from past projects to provide better delivery estimates
				</p>
				<div class="card_icon">
					<img src={icon_calculator} alt="computer monitor" />
				</div>
			</div>
		</div>
  )
}
import { CardContainerLeft } from "./CardContainerLeft"
import { CardContainerCenter } from "./CardContainerCenter"
import { CardContainerRight } from "./CardContainerRight"


export function Cards() {
	return (
		<div class="cards">
			<CardContainerLeft/>
			<CardContainerCenter/>
			<CardContainerRight/>
		</div>
	)
}
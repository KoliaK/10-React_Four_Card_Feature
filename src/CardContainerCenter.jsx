import icon_team_builder from "./images/icon-team-builder.svg";
import icon_karma from "./images/icon-karma.svg";


export function CardContainerCenter(){
  return (
    <div class="card_container_center">
			<div class="card_2">
				<p class="card_title">Team Builder</p>
				<p class="card_description">
					Scans our talent network to create the optimal team for your project
				</p>
				<div class="card_icon">
					<img src={icon_team_builder} alt="small house" />
				</div>
			</div>
	
			<div class="card_3">
				<p class="card_title">
					Karma
				</p>
				<p class="card_description">
					Regularly evaluates our talent to ensure quality
				</p>
				<div class="card_icon">
					<img src={icon_karma} alt="light bulb" />
				</div>
			</div>
		</div>
  )
}
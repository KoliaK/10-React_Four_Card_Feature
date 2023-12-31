import icon_supervisor from "./images/icon-supervisor.svg";

export function CardContainerLeft() {
  return (
    <div class="card_container_left">
      <div class="card_1">
        <p class="card_title">
          Supervisor
        </p>
        <p class="card_description">
          Monitors activity to identify project roadblocks
        </p>
        <div class="card_icon">
          <img src={icon_supervisor} alt="magnifying glass" />
        </div>
      </div>
    </div>
  )
}
import NewFilterView from '../view/filters-view.js';
import NewSortView from '../view/sort-view.js';
import NewAddFormView from '../view/add-new-point.js';
import NewAEditFormView from '../view/edit-point.js';
import NewAddPointWithoutOfferView from '../view/add-new-point-without-offers.js';
import { render } from '../render.js';
import NewWaypointView from '../view/waypoint.js';

export default class Presenter {
  filterComponent = new NewFilterView();
  sortComponent = new NewSortView();
  addFormComponent = new NewAddFormView();
  editFormComponent = new NewAEditFormView();
  addPointWithoutOfferComponent = new NewAddPointWithoutOfferView();
  waypointComponent = new NewWaypointView();

  #container = null;
  #pointModel = null;

  constructor({ container, pointModel }) {
    this.#container = container;
    this.#pointModel = pointModel;
  }

  init() {
    this.points = [...this.#pointModel.getPoints()];
    render(this.sortComponent, this.#container.element);
    render(this.editFormComponent, this.#container.element);

    for (let i = 0; i < this.points.length; i++) {
      render(new NewWaypointView({point: this.points[i]}), this.#container.element);
    }

    render(this.addFormComponent, this.#container.element);
    render(this.addPointWithoutOfferComponent, this.#container.element);
  }

  initFilter() {
    render(this.filterComponent, this.#container.element);
  }
}

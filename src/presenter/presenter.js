import NewFilterView from '../view/filters-view.js';
import NewSortView from '../view/sort-view.js';
import NewAddFormView from '../view/add-new-point.js';
import NewAEditFormView from '../view/edit-point.js';
import NewAddPointWithoutOfferView from '../view/add-new-point-without-offers.js';
import {render} from '../render.js';
import NewWaypointView from '../view/waypoint.js';

export default class Presenter {
  filterComponent = new NewFilterView();
  sortComponent = new NewSortView();
  addFormComponent = new NewAddFormView();
  editFormComponent = new NewAEditFormView();
  addPointWithoutOfferComponent = new NewAddPointWithoutOfferView();
  waypointComponent = new NewWaypointView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.editFormComponent, this.container);

    for (let i = 0; i < 3; i++) {
      render(new NewWaypointView(), this.container);
    }

    render(this.addFormComponent, this.container);
    render(this.addPointWithoutOfferComponent, this.container);

  }
}

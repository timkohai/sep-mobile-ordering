import React from 'react';



const MenuSideboard = ({ 
  addItem,
  itemEdit,
  inputItem,
  cancelEdit,
  deleteItem,
  onChangeForm,
  addIsInvalid,
  onChangeEdit,
  saveEditItem,
  isInvalidEdit,
}) => {
  return (
    <div className="menuSideboard">
      {(itemEdit.name === '' && itemEdit.idx === '') && (
        <>
          <div className="menuSideboard_view">
            <h3>ADD NEW ITEM</h3>
            <div className="menuSideboard_addItemForm">
              <div className="inputGroup">
                <h4>Name</h4>
                <input 
                  name="name"
                  type="text"
                  value={inputItem.name}
                  onChange={onChangeForm}
                />
              </div>
              <div className="inputGroup">
                <h4>Cost</h4>
                <div>
                  <h4>$</h4>
                  <input 
                    name="price"
                    type="number"
                    value={inputItem.price}
                    onChange={onChangeForm}
                  />
                </div>
              </div>
              <div className="inputGroup">
                <h4>Description</h4>
                <textarea 
                  rows="3" 
                  cols="50" 
                  form="usrform"  
                  name="description"
                  onChange={onChangeForm}
                  value={inputItem.description}
                />
              </div>
              <div className="inputGroup">
                <h4>Image Url</h4>
                <input 
                  name="image"
                  type="text"
                  value={inputItem.image}
                  onChange={onChangeForm}
                />
              </div>
              <div className="inputGroup">
                <h4>Size</h4>
                <select 
                  name="size" 
                  value={inputItem.size} 
                  onChange={onChangeForm}>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                </select>
              </div>
              <div className="inputGroup">
                <h4>Sugar</h4>
                <input 
                  type="text"
                  name="sugar"
                  value={inputItem.sugar}
                  onChange={onChangeForm}
                  />
              </div>
              <div className="inputGroup">
                <h4>Milk</h4>
                <input 
                  type="text"
                  name="milk"
                  value={inputItem.milk}
                  onChange={onChangeForm}
                  />
              </div>
              <div className="inputGroup">
                <h4>Type</h4>
                <div>
                  <div>Drink</div>
                  <input 
                    name="type" 
                    type="radio" 
                    value="drinks" 
                    onChange={onChangeForm}
                    checked={inputItem.type === "drinks"} 
                    />
                </div>
                <div>
                  <div>Dish</div>
                  <input 
                    name="type" 
                    type="radio" 
                    value="dishes" 
                    onChange={onChangeForm}
                    checked={inputItem.type === "dishes"}
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="menuSideboard_actionButtons">
            <div 
              onClick={addIsInvalid ? null : addItem}
              className={addIsInvalid ? "btn btn_disabled" : "btn"}
              >
                ADD ITEM
              </div>
          </div>
        </>
      )}
      {itemEdit.idx !== '' && (
        <>
          <div className="menuSideboard_view">
            <h3>EDITING ITEM</h3>
            <div className="menuSideboard_editItemForm">
              <div className="inputGroup">
                <h4>Name</h4>
                <input 
                  type="text"
                  name="name"
                  value={itemEdit.name}
                  onChange={onChangeEdit}
                  />
              </div>
              <div className="inputGroup">
                <h4>Cost</h4>
                <div>
                  <h4>$</h4>
                  <input 
                    name="price"
                    type="number"
                    value={itemEdit.price}
                    onChange={onChangeEdit}
                  />
                </div>
              </div>
              <div className="inputGroup">
                <h4>Description</h4>
                <textarea 
                  rows="3" 
                  cols="50" 
                  form="usrform"  
                  name="description"
                  onChange={onChangeEdit}
                  value={itemEdit.description}
                />
              </div>
              <div className="inputGroup">
                <h4>Image Url</h4>
                <input 
                  type="text"
                  name="image"
                  value={itemEdit.image}
                  onChange={onChangeEdit}
                  />
              </div>
              <div className="inputGroup">
                <h4>Size</h4>
                <select 
                  name="size" 
                  value={itemEdit.size} 
                  onChange={onChangeEdit}>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                </select>
              </div>
              <div className="inputGroup">
                <h4>Sugar</h4>
                <input 
                  type="text"
                  name="sugar"
                  value={itemEdit.sugar}
                  onChange={onChangeEdit}
                  />
              </div>
              <div className="inputGroup">
                <h4>Milk</h4>
                <input 
                  type="text"
                  name="milk"
                  value={itemEdit.milk}
                  onChange={onChangeEdit}
                  />
              </div>
              <div className="inputGroup">
                <h4>Available</h4>
                <div>
                  <div>Yes</div>
                  <input 
                    type="radio" 
                    value={true} 
                    name="available" 
                    onChange={onChangeEdit}
                    checked={itemEdit.available} 
                    />
                </div>
                <div>
                  <div>No</div>
                  <input 
                    type="radio" 
                    value={false} 
                    name="available" 
                    onChange={onChangeEdit}
                    checked={!itemEdit.available}
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="menuSideboard_actionButtons">
            <div 
              onClick={isInvalidEdit ? null : (e) => saveEditItem(e, itemEdit.idx)}
              className={isInvalidEdit ? "btn btn_disabled" : "btn"}
            >
              SAVE
            </div>
            <div
              onClick={() => deleteItem(itemEdit.idx, itemEdit.type)}
              className="btn btn_secondary"
            >
              DELETE
            </div>
            <div
              onClick={cancelEdit}
              className="btn btn_secondary"
            >
              CANCEL
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MenuSideboard;
import React from 'react';

const ClientMenuItemCard = ({
  idx,
  item,
  type,
  addItem,
  isInOrder,
  deleteItem,
  getItemQty,
  currentItem,
  isCurrentItem,
  upgradeItemQty,
  setCurrentItem,
  updateItem,
}) => {
  return (

    <> 
      {!isCurrentItem && (
        <div 
          id={isInOrder && "isInOrder"} 
          className="client_menuItemCard" 
          onClick={() => setCurrentItem(type, idx, item)}
        >
          <div className="image"><img src={item.image}/></div>
          <h3>{item.name.toUpperCase()}</h3>
          <h3>{isInOrder ? `x${getItemQty(item.name, type)}` : `$${item.price}`}</h3>
        </div>
      )}
      {isCurrentItem && (
        <div className="client_menuItemCard" id="isSelected">
          <div>
            <div>
              <h3>{item.name.toUpperCase()}</h3>
              <h3>${item.price}</h3>
            </div>
            <p>{item.description}</p>

            { type == 'drinks' &&
              <div>
              <div>Size:</div>
              <select 
                name="attribute" 
                value="" 
                onChange={updateItem}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
              <br />
              <div>Sugar:</div>
              <select 
                name="attribute" 
                value="" 
                onChange={updateItem}>
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
              <br />
              <div>Milk:</div>
              <select 
                name="attribute" 
                value="" 
                onChange={updateItem}>
                <option value="almond">Almond Milk</option>
                <option value="skimmed">Skimmed Milk</option>
              </select>
              <br />
              <br />
              </div>
            }
          </div>
          <div>
            <div>
              <h3 onClick={() => upgradeItemQty(-1)}>-</h3>
              <h3>{currentItem.qty}</h3>
              <h3 onClick={() => upgradeItemQty(1)}>+</h3>
            </div>
            <h3 onClick={() => addItem()}>{isInOrder ? "SAVE" : "ADD"}</h3>
            {isInOrder && <h3 onClick={() => deleteItem(item, type)}>REMOVE</h3>}
          </div>
        </div>
      )}
    </>
  );
};

export default ClientMenuItemCard;
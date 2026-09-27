from enum import Enum

class Action(Enum):
    """ An action is any button that can be clicked  """

    CONSENT = "button.fc-button.fc-cta-consent.fc-primary-button"
    PLAY_GAME = "button.coffee.big"
    END_TUTORIAL = "#screen-tutorial1 button.show.active"
    TUTORIAL_NEXT = "#screen-tutorial1 button.next"

    BUY_CUPS_10 = 'p.buy[data-state="inventoryCups"]'
    BUY_COFFEE_10 = ''
    BUY_COFFEE_25 = ""
    BUY_COFFEE_50 = ""
    BUY_MILK_20 = ""
    BUY_SUGAR=""


class AmountAction(Enum):
    SET_PRICE='p.slider[data-state="price"]'
    SET_COFFEE_RECIPE='p.slider[data-state="recipeCoffee"]'
    SET_MILK_RECIPE='p.slider[data-state="recipeMilk"]'
    SET_SUGAR_RECIPE='p.slider[data-state="recipeSugar"]'
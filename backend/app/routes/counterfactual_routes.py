from fastapi import APIRouter
from ai_modules.counterfactual_test import simulate_counterfactual

router = APIRouter()

@router.post("/counterfactual_test")
def test_counterfactual(candidate: dict):

    result = simulate_counterfactual(candidate)

    return result